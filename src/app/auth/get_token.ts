"use server";

import { env } from "next-runtime-env";
import { cookies } from "next/headers";
import * as client from "openid-client";

export async function get_token(
  pkce_verifier: string,
  currentUrl: string,
  state: string
) {
  const client_id = env("CLIENT_ID");
  const client_secret = env("CLIENT_SECRET");
  const server = env("API_URL");
  if (!server || !client_id) {
    return;
  }
  const serverUrl = URL.parse(server);
  if (!serverUrl) {
    return;
  }
  const config: client.Configuration = await client.discovery(
    serverUrl,
    client_id,
    client_secret
  );

  const current = URL.parse(currentUrl);
  if (!current) {
    return;
  }

  const token: client.TokenEndpointResponse =
    await client.authorizationCodeGrant(config, current, {
      pkceCodeVerifier: pkce_verifier,
      expectedState: state,
    });

  (await cookies()).set("access_token", token.access_token, {
    httpOnly: true,
    secure: true,
  });
  if (token.refresh_token) {
    (await cookies()).set("refresh_token", token.refresh_token, {
      httpOnly: true,
      secure: true,
    });
  }
}
