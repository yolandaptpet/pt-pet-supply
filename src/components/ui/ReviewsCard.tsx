import React, { useEffect, useState } from 'react';

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
}

interface ReviewsCardProps {
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
const ReviewsCard: React.FC<ReviewsCardProps> = ({ businessId, apiKey }) => {
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
                }));

              setReviews(filteredReviews);
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
    <section className="flex my-auto ml-5 p-3 drop-shadow-2xl">
      <div
        className="relative w-[300px] h-[130px] flex rounded-3xl bg-[#F9DCB1] bg-opacity-50"
        style={{ backdropFilter: "blur(35px)" }}
      >
        <div className="absolute top-5 -left-7">
          <img
            src="https://placehold.co/350x350/png"
            alt="Blog tag photo"
            className="w-[70px] h-auto rounded-2xl"
          />
        </div>
        <div className="ml-12">
          <div className="max-w-md mx-auto overflow-hidden">
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
