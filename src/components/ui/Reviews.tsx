import React, { useEffect, useState } from 'react';

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
}

interface ReviewsProps {
  businessId: string;
  apiKey: string;
}

declare const google: any;

/**
 * Fetches and displays customer reviews.
 *
 * @param {string} businessId - The ID of the business for which to fetch reviews.
 * @return {JSX.Element} A JSX element containing the reviews, or a loading/error message if applicable.
 */
const Reviews: React.FC<ReviewsProps> = ({ businessId, apiKey }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      const fetchReviews = async () => {
      if (typeof window === 'undefined' || !window.google) {
        setError('Google Maps API not loaded');
        setLoading(false);
        return;
      }
  
      try {
        const service = new google.maps.places.PlacesService(document.createElement('div'));
        service.getDetails(
          {
            placeId: businessId,
            fields: ['reviews'],
          },
          (place: google.maps.places.PlaceResult | null, status: google.maps.places.PlacesServiceStatus) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
              const filteredReviews = place.reviews
                .filter((review) => (review.rating ?? 0) >= 4)
                .map((review: google.maps.places.PlaceReview) => ({
                  id: review.time.toString(),
                  author: review.author_name,
                  rating: review.rating ?? 0,
                  text: review.text ?? '',
                })).slice(0, 3);

              setReviews(filteredReviews);
              console.log(filteredReviews);
              console.log(reviews);
            } else {
              setError('No reviews available');
            }
            setLoading(false);
          }
        );
      } catch (err) {
        setError('Failed to fetch reviews');
        setLoading(false);
      }
    };
  
    fetchReviews();
  }, [businessId, apiKey]);
  
  if (loading) return <p className="my-auto px-5">Loading...</p>;
  if (error) return <p className="my-auto px-5">{error}</p>;

  return (
    <section className="space-y-4 md:space-y-0 md:space-x-6 md:flex my-auto mb-16 drop-shadow-2xl">
      {reviews.map((review) => (
        <div
          className="relative w-[300px] min-[500px]:w-[340px] md:w-[220px] lg:w-[290px] xl:w-[320px] h-[150px] flex-grow flex items-center justify-between rounded-3xl bg-gradient-to-br from-[#f9dcb157] to-[#ffc76d81] drop-shadow-2xl my-auto"
          style={{ backdropFilter: "blur(35px)" }}
          key={review.id}
        >
          <div className="absolute top-5 -left-2">
            <img
              src="src/assets/review-icon.svg"
              alt="Review author photo"
              className="w-[55px] h-auto rounded-2xl p-1.5 bg-gradient-to-tl from-[#7F0201] from-10% via-[#A52A2A] via-30% to-[#FFC66D] to-90% "
            />
            <img src="src/assets/expand-icon.svg" alt="Expand button" className='absolute -bottom-16 left-4 w-[65%] h-auto transform -scale-x-100' />
          </div>
          <div key={review.id} className="ml-12 -mt-1 px-4">
            <div className="flex items-center">
              <span className="font-semibold tracking-tighter">
                {review.author.split(" ")[0]} &nbsp;
                {review.author.split(" ")[1]?.[0].toUpperCase()}.
              </span>
              <span className="ml-2 text-yellow-500">{"★".repeat(review.rating)}</span>
            </div>
            <p className="text-[#452B1F] max-h-16 mt-1.5 tracking-tighter line-clamp-3">{review.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Reviews;
