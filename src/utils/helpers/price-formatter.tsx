export function formatPrice(price: any) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
