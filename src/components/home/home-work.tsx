import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function HomeWork() {
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
    <div className="columns-1 md:columns-2 lg:columns-3 space-y-2 pb-24">
      {posts.map((item) => (
        <div
          key={item.id}
          className="break-inside-avoid relative rounded-xl overflow-hidden"
        >
          <Image
            src={item.image}
            alt="image"
            height={100}
            width={200}
            className="w-full overflow-hidden"
          />
          <Link
            href={"/"}
            className="absolute top-5 right-5 bg-yellow-200 z-100 rounded-full p-2"
          >
            <FiArrowUpRight className="size-5 font-semibold" />
          </Link>
          <div className="absolute bottom-0 px-2 py-1 flex items-end bg-black/70 h-full w-full">
            <h2 className="text-xl font-bold mb-2 text-yellow-200">
              {item.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
