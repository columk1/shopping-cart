export async function getProduct(id) {
  // const product = data.find((product) => product.id === id)
  const product = await (await fetch(`https://fakestoreapi.com/products/${id}`)).json()
  return product ?? null
}

// Product Loader for shop/:productId
export async function loader({ params }) {
  const product = await getProduct(params.productId)
  if (!product) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    })
  }
  return { product }
}
