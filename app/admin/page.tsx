"use client";

import { useEffect, useState } from "react";
import AdminLogin from "@/components/admin/admin-login";
import AdminDashboard from "@/components/admin/admin-dashboard";

export type Proposal = {
  id: string;
  name: string;
  organisation: string;
  email: string;
  purpose: string;
  created_at: string;
};

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [proposals, setProposals] = useState<Proposal[]>([]);

  useEffect(() => {
    checkAuthentication();
  }, []);

  async function checkAuthentication() {
    try {
      const response = await fetch("/api/proposals.php", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();

        setProposals(data.data);
        setAuthenticated(true);
        return;
      }

      if (response.status === 401) {
        setAuthenticated(false);
        return;
      }

      setAuthenticated(false);
    } catch {
      setAuthenticated(false);
    }
  }

  async function handleLogin(username: string, password: string) {
    const response = await fetch("/api/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Invalid username or password");
    }

    setAuthenticated(true);

    await loadProposals();
  }

  async function loadProposals() {
    const response = await fetch("/api/proposals.php", {
      method: "GET",
      credentials: "include",
    });

    if (response.status === 401) {
      setAuthenticated(false);
      return;
    }

    if (!response.ok) {
      throw new Error("Failed to load proposals");
    }

    const responseData = await response.json();


    setProposals(responseData.data);
  }

  async function handleLogout() {
    try {
      await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });
    } finally {
      setAuthenticated(false);
      setProposals([]);
    }
  }

  if (authenticated === null) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Checking authentication...
        </p>
      </div>
    );
  }

  if (!authenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <AdminDashboard
      proposals={proposals}
      onRefresh={loadProposals}
      onLogout={handleLogout}
      onAuthenticationFailure={() => {
        setAuthenticated(false);
        setProposals([]);
      }}
    />
  );
}