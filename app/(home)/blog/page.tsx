import BlogComponent from "./_components/blog-component";

export const metadata = {
  title: "Planix Blog | İşletmenizi Büyütmek İçin İpuçları",
  description:
    "Planix blogunda işletmenizi büyütmek için ipuçları ve randevu yönetim sistemleri hakkında bilgi edinin.",
  keywords: [
    "Planix blog",
    "işletme ipuçları",
    "randevu yönetimi",
    "müşteri yönetimi",
  ],
  alternates: {
    canonical: "https://planix.com.tr/blog",
  },
};

const BlogPage = () => {
  return <BlogComponent />;
};

export default BlogPage;
