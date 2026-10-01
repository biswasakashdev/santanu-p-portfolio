"use client";

import { FormEvent, useActionState, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type AdminLoginProps = {
  onLogin: (username: string, password: string) => Promise<void>;
};

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string|null>(null);
  
  const [state, formAction, loading] = useActionState<SignInForm, FormData>(async(preState:SignInForm, formData:FormData)=>{
    await onLogin(formData.get("username") as string, formData.get("password") as string)
    return {username: formData.get("username") as string} as SignInForm;
},{})

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>

          <CardDescription>
            Sign in to manage your proposals.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form action={formAction} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>

              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Enter username"
                defaultValue={state.username}
                autoComplete="username"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                defaultValue={state.password}
                autoComplete="current-password"
                required
              />
            </div>

            {error && (
              <div className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

export interface SignInForm {
  username?: string;
  password?: string;
}