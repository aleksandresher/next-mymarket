import { connectToDB } from "@utils/database";

import Mobile from "../../../../../models/Mobile";

export const GET = async (request, { params }, response) => {
  const { title } = request.query;

  try {
    await connectToDB();

    const agg = [
      {
        $search: {
          autocomplete: {
            query: title,
            path: "title",
            fuzzy: {
              maxEdits: 2,
            },
          },
        },
      },
      {
        $limit: 5,
      },
      {
        $project: {
          _id: 0,
          title: 1,
          image: 1,
        },
      },
    ];

    const response = await Mobile.aggregate(agg);

    return new Response(JSON.stringify(response), { status: 201 });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Failed to search mobile" });
  }
};
