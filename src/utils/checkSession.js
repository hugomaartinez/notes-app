import { Astro } from "astro";
import { getSession } from "auth-astro/server";

export async function checkSession() {
  const session = await getSession(Astro.request);

  if (!session) {
    Astro.redirect("/login");
  }
}

export async function checkSessionLogin() {
  const session = await getSession(Astro.request);

  if (session) {
    Astro.redirect("/");
  }
}
