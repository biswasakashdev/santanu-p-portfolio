"use client";

import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

import { LogOut, RefreshCw, Trash2 } from "lucide-react";

import type { Proposal } from "@/app/admin/page";

type AdminDashboardProps = {
  proposals: Proposal[];
  onRefresh: () => Promise<void>;
  onLogout: () => Promise<void>;
  onAuthenticationFailure: () => void;
};

export default function AdminDashboard({
  proposals,
  onRefresh,
  onLogout,
  onAuthenticationFailure,
}: AdminDashboardProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const [deleteIds, setDeleteIds] = useState<string[]>([]);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [deleting, setDeleting] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const allSelected =
    proposals.length > 0 &&
    proposals.every((proposal) => selectedIds.includes(proposal.id));

  function toggleProposal(id: string) {
    setSelectedIds((current) => {
      if (current.includes(id)) {
        return current.filter((selectedId) => selectedId !== id);
      }

      return [...current, id];
    });
  }

  function toggleAll() {
    if (allSelected) {
      setSelectedIds([]);
      return;
    }

    setSelectedIds(proposals.map((proposal) => proposal.id));
  }

  function openDeleteDialog(ids: string[]) {
    setDeleteIds(ids);
    setDeleteDialogOpen(true);
  }

  async function deleteProposals() {
    if (deleteIds.length === 0) {
      return;
    }

    setDeleting(true);

    try {
      const response = await fetch("/api/proposals.php", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          post_id: deleteIds,
        }),
      });

      if (response.status === 401) {
        onAuthenticationFailure();
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete proposals");
      }

      setSelectedIds([]);

      setDeleteDialogOpen(false);
      setDeleteIds([]);

      await onRefresh();
    } catch (error) {
      console.error(error);
    } finally {
      setDeleting(false);
    }
  }

  async function refresh() {
    setRefreshing(true);

    try {
      await onRefresh();
    } finally {
      setRefreshing(false);
    }
  }

  async function logout() {
    setLoggingOut(true);

    try {
      await onLogout();
    } finally {
      setLoggingOut(false);
    }
  }

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Admin Dashboard
            </h1>

            <p className="text-sm text-muted-foreground">
              Manage your submitted proposals.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={refresh} disabled={refreshing}>
              <RefreshCw
                className={`mr-2 h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>

            <Button variant="outline" onClick={logout} disabled={loggingOut}>
              <LogOut className="mr-2 h-4 w-4" />

              {loggingOut ? "Logging out..." : "Logout"}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Proposals</CardDescription>

              <CardTitle className="text-3xl">{proposals.length}</CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Selected</CardDescription>

              <CardTitle className="text-3xl">{selectedIds.length}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Proposals */}
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle>Proposals</CardTitle>

                <CardDescription>
                  View and manage contact proposals.
                </CardDescription>
              </div>

              {selectedIds.length > 0 && (
                <Button
                  variant="destructive"
                  onClick={() => openDeleteDialog(selectedIds)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete {selectedIds.length}
                </Button>
              )}
            </div>
          </CardHeader>

          <CardContent>
            {proposals.length === 0 ? (
              <div className="flex min-h-40 items-center justify-center rounded-md border border-dashed">
                <div className="text-center">
                  <p className="font-medium">No proposals yet</p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Submitted proposals will appear here.
                  </p>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-10">
                        <Checkbox
                          checked={allSelected}
                          onCheckedChange={toggleAll}
                          aria-label="Select all proposals"
                        />
                      </TableHead>

                      <TableHead>Name</TableHead>
                      <TableHead>Organisation</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {proposals.map((proposal) => {
                      const selected = selectedIds.includes(proposal.id);

                      return (
                        <TableRow key={proposal.id}>
                          <TableCell>
                            <Checkbox
                              checked={selected}
                              onCheckedChange={() =>
                                toggleProposal(proposal.id)
                              }
                              aria-label={`Select ${proposal.name}`}
                            />
                          </TableCell>

                          <TableCell className="font-medium">
                            {proposal.name}
                          </TableCell>

                          <TableCell>{proposal.organisation}</TableCell>

                          <TableCell>{proposal.email}</TableCell>

                          <TableCell className="min-w-[300px] max-w-[500px] whitespace-normal">
                            <p className="break-words leading-relaxed">
                              {proposal.purpose}
                            </p>
                          </TableCell>

                          <TableCell>
                            <Badge variant="secondary">
                              {formatDate(proposal.created_at)}
                            </Badge>
                          </TableCell>

                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-destructive hover:text-destructive"
                              onClick={() => openDeleteDialog([proposal.id])}
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete proposal</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Delete confirmation */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Delete proposal{deleteIds.length > 1 ? "s" : ""}?
            </AlertDialogTitle>

            <AlertDialogDescription>
              This action cannot be undone.{" "}
              {deleteIds.length > 1
                ? `${deleteIds.length} proposals will be permanently deleted.`
                : "This proposal will be permanently deleted."}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Cancel</AlertDialogCancel>

            <AlertDialogAction
              onClick={deleteProposals}
              disabled={deleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}
