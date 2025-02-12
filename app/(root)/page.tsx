import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartUpCard from "@/components/StartUpCard";

export default async function Home({searchParams}: {
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      createdAt: new Date(),
      views: 20,
      author: {id: 1},
      id: 1,
      description: "This is a description",
      image: 'https://images.unsplash.com/photo-1738463748284-724277705fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
    }
  ]
  return (
    <>
    <section className="pink_container">
      <h1 className="heading">Pitch Your Startup, <br /> Connect With entrepreneurs</h1>
      <p className="sub-heading text-white !max-w-3xl">
        Submit Ideas, Vote On Pitches, and Get Noticed in Virtual Competitions.
      </p>
      <SearchForm query={query}/>
    </section>
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"` : 'All Startups' }
      </p>
      <ul className="mt-7 car_grid">
        {posts?.length > 0 ? (
          posts.map((post: StartUpCardType) => (
            <StartUpCard key={post ?.id} post={post} />
          ))
        ): (
          <p className="no-results">No Startups found</p>
        ) 
        }
      </ul>
    </section>
    </>
  );
}
