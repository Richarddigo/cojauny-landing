export class RequestBodyError extends Error {
  constructor(public status: number) { super('Invalid request body'); }
}

/** Bound streamed JSON before parsing; also works when Content-Length is absent. */
export async function readRequestJson(request: Request): Promise<unknown> {
  const maxBytes = 32 * 1024;
  if (Number(request.headers.get('content-length')) > maxBytes) throw new RequestBodyError(413);
  if (!request.body) throw new RequestBodyError(400);
  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let bytes = 0;
  let text = '';
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > maxBytes) { void reader.cancel(); throw new RequestBodyError(413); }
      text += decoder.decode(value, { stream: true });
    }
    text += decoder.decode();
    return JSON.parse(text);
  } finally { reader.releaseLock(); }
}
