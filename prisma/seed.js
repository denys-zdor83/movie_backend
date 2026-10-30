import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// The reason why we are creating a new instance of PrismaClient
// is that this file won't be a part of our API
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// ID of the person who is creating this data
const creatorID = process.env.SEED_CREATOR_ID;

const movies = [
  {
    title: "Movie 1",
    overview: "Some movie about someone in the Movie 1",
    releaseYear: 1999,
    genres: ["Drama"],
    runtime: 154,
    posterUrl: "https://picsum.photos/id/237/200/300",
    createdBy: creatorID,
  },
  {
    title: "Movie 2",
    overview: "Some movie about someone in the Movie 2",
    releaseYear: 1997,
    genres: ["Action"],
    runtime: 134,
    posterUrl: "https://picsum.photos/id/237/200/300",
    createdBy: creatorID,
  },
    {
    title: "Movie 3",
    overview: "Some movie about someone in the Movie 3",
    releaseYear: 1993,
    genres: ["Action", "Romance"],
    runtime: 126,
    posterUrl: "https://picsum.photos/id/237/200/300",
    createdBy: creatorID,
  },
    {
    title: "Movie 4",
    overview: "Some movie about someone in the Movie 4",
    releaseYear: 2000,
    genres: ["Drama", "Romance"],
    runtime: 174,
    posterUrl: "https://picsum.photos/id/237/200/300",
    createdBy: creatorID,
  },
    {
    title: "Movie 5",
    overview: "Some movie about someone in the Movie 5",
    releaseYear: 1998,
    genres: ["Biography"],
    runtime: 145,
    posterUrl: "https://picsum.photos/id/237/200/300",
    createdBy: creatorID,
  },
    {
    title: "Movie 6",
    overview: "Some movie about someone in the Movie 6",
    releaseYear: 2002,
    genres: ["Detective"],
    runtime: 136,
    posterUrl: "https://picsum.photos/id/237/200/300",
    createdBy: creatorID,
  },
    {
    title: "Movie 7",
    overview: "Some movie about someone in the Movie 7",
    releaseYear: 1999,
    genres: ["Drama"],
    runtime: 139,
    posterUrl: "https://picsum.photos/id/237/200/300",
    createdBy: creatorID,
  },
    {
    title: "Movie 8",
    overview: "Some movie about someone in the Movie 8",
    releaseYear: 1995,
    genres: ["Detective", "Action", "Drama"],
    runtime: 167,
    posterUrl: "https://picsum.photos/id/237/200/300",
    createdBy: creatorID,
  },
    {
    title: "Movie 9",
    overview: "Some movie about someone in the Movie 9",
    releaseYear: 1990,
    genres: ["Action"],
    runtime: 159,
    posterUrl: "https://picsum.photos/id/237/200/300",
    createdBy: creatorID,
  },
    {
    title: "Movie 10",
    overview: "Some movie about someone in the Movie 10",
    releaseYear: 2008,
    genres: ["Romance"],
    runtime: 147,
    posterUrl: "https://picsum.photos/id/237/200/300",
    createdBy: creatorID,
  },
]

const main = async () => {
  console.log("Seeding movies...");

  for (const movie of movies) {
    await prisma.movie.create({
      data: movie,
    });
    console.log(`Created movie: ${movie.title}`);
  }

  console.log("Seeding completed!");
}

main()
  .catch(err => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })