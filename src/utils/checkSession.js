import { getSession } from "auth-astro/server";

export async function checkSession(Astro) {
  const session = await getSession(Astro.request);

  if (!session) {
    Astro.redirect("/login");
  }
}

export async function checkSessionLogin(Astro) {
  const session = await getSession(Astro.request);

  if (session) {
    Astro.redirect("/");
  }
}
