export async function onRequest() {
  const helloWorld = await import('../../server-js/index').then(({helloWorld}) => helloWorld);
  return new Response(JSON.stringify({ text: helloWorld }));
}
