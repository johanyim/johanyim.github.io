/** @type {import('./$types').PageLoad} */
export async function load({ params }: any) {
    const post = await import(`$posts/${params.slug}.md`);
    return { post };
}
