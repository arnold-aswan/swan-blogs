import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import PostList from "@/components/PostList";
import Side from "@/components/Side";

export default function Home() {
  return (
    <main>
      <Featured />
      <CategoryList />
      <section className="flex gap-14">
        <PostList />
        {/* <aside className="flex-2"> */}
        <Side />
        {/* </aside> */}
      </section>
    </main>
  );
}
