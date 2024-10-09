import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the structure of a single review
interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
}

// Define the props for ReviewsCard
interface ReviewsCardProps {
  businessId: string;
}

// Define the API response structure
interface ApiResponse {
  reviews: Review[];
}

/**
 * Returns a specified number of unique random reviews from a given array.
 *
 * @param {Review[]} reviews - The array of reviews to select from.
 * @param {number} count - The maximum number of reviews to return.
 * @return {Review[]} An array of up to `count` unique random reviews.
 */
const getRandomReviews = (reviews: Review[], count: number): Review[] => {
  const shuffledReviews = [...reviews].sort(() => 0.5 - Math.random());
  return shuffledReviews.slice(0, count); // Select up to `count` reviews
};

/**
 * Fetches and displays customer reviews.
 *
 * @param {string} businessId - The ID of the business for which to fetch reviews.
 * @return {JSX.Element} A JSX element containing the reviews, or a loading/error message if applicable.
 */
const ReviewsCard: React.FC<ReviewsCardProps> = ({ businessId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get<ApiResponse>(`YOUR_GOOGLE_REVIEWS_API_ENDPOINT/${businessId}`);
        
        // Filter reviews with 4 stars or higher and exclude those mentioning "groom" or "grooming"
        const filteredReviews = response.data.reviews.filter(
          (review) => review.rating >= 4 && !/groom|grooming/i.test(review.text)
        );
        
        // Randomly select up to 3 reviews
        const randomReviews = getRandomReviews(filteredReviews, 3);
        setReviews(randomReviews);
      } catch (err) {
        setError('Error fetching reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [businessId]);

  if (loading) return <p className="my-auto px-5">Loading...</p>;
  if (error) return <p className="my-auto px-5">{error}</p>;

  return (
    <section className="flex my-auto ml-4 px-2 drop-shadow-2xl">
      <div
        className="relative w-[350px] h-[200px] flex pt-8 rounded-3xl bg-[#FFC66D] bg-opacity-50"
        style={{ backdropFilter: "blur(35px)" }}
      >
        <div className="absolute top-5 -left-8">
          <img
            src="https://placehold.co/350x350/png"
            alt="Blog tag photo"
            className="w-[110px] h-auto rounded-2xl"
          />
        </div>
        <div className="ml-20 px-2">
          <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <h2 className="text-xl font-bold text-center p-4">Customer Reviews</h2>
            <div className="p-4">
              {reviews.length === 0 ? (
                <p>No reviews available.</p>
              ) : (
                reviews.map((review) => (
                  <div key={review.id} className="mb-4 border-b pb-4">
                    <div className="flex items-center">
                      <span className="font-semibold">
                        {review.author.split(' ')[0]} {review.author.split(' ')[1]?.[0].toUpperCase()}.
                      </span>
                      <span className="ml-2 text-yellow-500">{'★'.repeat(review.rating)}</span>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCard;
