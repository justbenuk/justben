import Image from "next/image";

export default function HomeBlogs() {
  const posts = [
    // Your blog post data will go here
    {
      id: 1,
      title: "Post 1",
      content: "Short content...",
      image: "/images/samples/image2.jpg",
    },
    {
      id: 2,
      title: "Post 2",
      image: "/images/samples/image1.jpg",
      content:
        "This is a much longer post to demonstrate the masonry effect. It will span multiple lines.",
    },
    {
      id: 3,
      title: "Post 3",
      image: "/images/samples/image3.jpg",
      content:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas",
    },
    {
      id: 4,
      title: "Post 4",
      content: "A medium-length post for variety.",
      image: "/images/samples/image4.jpg",
    },
    {
      id: 5,
      title: "Post 5",
      image: "/images/samples/image5.jpg",
      content:
        "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      id: 6,
      title: "Post 6",
      image: "/images/samples/image6.jpg",
      content: "Final post in this example.",
    },
  ];
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 space-y-2">
      {posts.map((item) => (
        <div key={item.id} className="break-inside-avoid">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={item.image}
              alt="image"
              height={100}
              width={200}
              className="w-full overflow-hidden"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
