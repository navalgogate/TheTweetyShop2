import { Product } from '../types';

export const BRAND_LOGO = '/assets/tweety-logo.svg';

export const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDOBBwfcbHSHKgsYmxzC4ao8YwmeXnUT98-YWM_S6h2cbS4mpdUY5N_v5mZzbo6uKNNABYa6nRmFlDktPNeXiZ9dq3N52v60LINIYuUftxuRaKxtOilZFi1oKzs3zQewRpToypYWI0roxmeilyrAFpRDc3tYv6VYE9HX0DH_RhHjl8QRqab6Y3kP6j-L7z_BGWD9PJeF4NsKw1fQKN3Dn125JXymqbMvWX1NaHxrxaCC2wxixdplms';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Floral Cotton Kurti',
    category: 'Kurtis',
    description: 'Comfortable and stylish everyday kurti.',
    price: '₹899',
    numericPrice: 899,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCDgpWByBqGbAeO5BvrY4rayd8SiMT9wlcd8b20r9F6GI5ad8T1DNK68oH5OGdYaR9-FW5laYJn9JD17DbC1bnCEvMVmqS1tVUwlR7Ec8UbIZbLjuTP0hxqiGapVn_2srCcZbRiIGeb0PNHbB2dMiUqUQV2Ac8iAJAt7695Qfudn0_D2aG4dl1Xli3IfsTAy6CU2qWy54hXGawCHezRFQPZh1fEofJ_gjVh4SApPOiVpjufqx2UPVc',
    badge: 'Bestseller',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    fabric: '100% Pure Breathable Cotton',
    fit: 'Regular A-line comfort fit',
    care: 'Machine wash cold with gentle cycle',
  },
  {
    id: 2,
    name: 'Classic Black Top',
    category: 'Tops',
    description: "Simple and versatile women's top.",
    price: '₹699',
    numericPrice: 699,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcvYebdDMmwmE8SWUtYivn9tmFyF58Bl8Zl1MjUKMkmWiZi4N5awmys73pQJU7yj8y02qauribGaOwQ4tFPkHGUzpg3AzXQ8pG6csdkINpBSSJQyTNu3vLvv0U2kW9l5_H19_9wkqkwUb-H6HEVGM6vovLGEz4wYCWIr75cXm8u6wXaTBMcNEo7lMLGrb_9yeMKZp8okHDr3yV3nUtcRk8EewZIZmWg_xmSRWjY34hnAyW8Gts6x8',
    badge: 'Essential',
    sizes: ['XS', 'S', 'M', 'L'],
    fabric: 'Ribbed Cotton-Modal Blend',
    fit: 'Relaxed sleeveless fit',
    care: 'Gentle hand or machine wash',
  },
  {
    id: 3,
    name: 'High Rise Blue Jeans',
    category: 'Jeans',
    description: 'Comfortable everyday denim.',
    price: '₹1,299',
    numericPrice: 1299,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqh3fdw_U2Vg1VsF8M1a4a_b1l28mCx91FSLb9jcOyr7wy-Ju31z00TlWgVvJpkl3rVQcglPPZjMHSIobwfqZm2o_nhUXn_bIvTa1sV29iCXLrwXrADU5WyvhsqYMAeghEQvUbuF5FWZnZFvSH6HSNN5gqA1h0JnCYI_-6fSiLXI_Gu_oK3U25f97KVu897_OcHkEgiOsID8py0Uqn4u9wqPeAT1bfWi81BI0lZJ23sUw69Sjvc6E',
    badge: 'Top Rated',
    sizes: ['28', '30', '32', '34'],
    fabric: '98% Cotton, 2% Elastane Stretch Denim',
    fit: 'High-waisted straight leg',
    care: 'Wash inside out with similar colors',
  },
  {
    id: 4,
    name: 'Summer Casual Dress',
    category: 'Dresses',
    description: 'Light and comfortable summer dress.',
    price: '₹999',
    numericPrice: 999,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCgQiwPvdIS7d9kpneLJYMA0btmXA13WBzAkRE0yQGsftYRAV3AWFqQQUGNY2Pn9Qv78xL4_9gZ-PjfTWIu6-I2wlAACchVYkcIRIJsVDvc3vJl26Xt-kM0Loug8Xm9feUEIIhA2M1i7biVhfryZ7hN2FmgOq3dzPI2-3QrpsyGk33_aSApVR_vNnojZMfosKzeHb0skdIOIYYx8wE2D1sb9ovwSDByzvFv5_e88bv5N_Ih6fJPSjg',
    badge: 'Sunny Special',
    sizes: ['S', 'M', 'L', 'XL'],
    fabric: 'Soft Viscose Rayon Flow',
    fit: 'Tiered silhouette with waist tie',
    care: 'Hand wash cold to preserve color vibrance',
  },
  {
    id: 5,
    name: "Basic Women's T-Shirt",
    category: 'T-Shirts',
    description: 'Easy everyday casual wear.',
    price: '₹499',
    numericPrice: 499,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7iNBuM-5kteiqURWCF69g8k_OEQG8uT7wuQMwYvUKgzEnp28zIWaYmGqpNx-Ptql4wktY2AJkRXx1bGdnoUxk20toSvvc14ZVRfp4nEKURnFJqp3P-Em58AxhhsKcldyVjOXx2Fu5oABt1iH_GPE6yyr3ClXM5dAo4nrhLlbjWUb03-yyxpBmg27TXfyeDs6au8Jwo_4o0hOkQSlaT5SUpuJXDo3IbD2yEDU71ZjoLnWWA9vyuFo',
    badge: 'Must Have',
    sizes: ['S', 'M', 'L', 'XL'],
    fabric: '100% Super Combed Organic Cotton',
    fit: 'Classic crew neck regular fit',
    care: 'Machine wash warm, tumble dry low',
  },
  {
    id: 6,
    name: 'Beige Co-ord Set',
    category: 'Co-ord Sets',
    description: 'Modern and comfortable matching set.',
    price: '₹1,399',
    numericPrice: 1399,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDag-TktEKbclQP1UGYeev2lcpUaVNBU9gDjMAd_91DitlNrER9-MiwMNzNg25kB1T-4Wl63-hLLMIktVX9PLtpnQYqAWAlm5AB79lz58ZwGEuHbBndg2yqVGuWXhTUZow1Hf2bdUen2T4FJANw9WfyafOM8hYvERwtbOsM0H9N_5_zr6TsRPyhAeQe0orrkzIc6AZ7k0zwqG1J0sUmq7mZTX8vSqymnUpPMAe3aQOdjC0KJzu9XrQ',
    badge: 'Trending',
    sizes: ['S', 'M', 'L'],
    fabric: 'Premium Textured Linen Blend',
    fit: 'Tailored waistcoat with wide-leg trousers',
    care: 'Dry clean recommended or gentle cold wash',
  },
];
