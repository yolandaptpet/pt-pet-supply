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

interface ReviewModalProps {
  review: Review;
  onClose: () => void;
}

declare const google: any;

const Modal = ({ review, onClose }: ReviewModalProps) => (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center" transition:name="modal-overlay">
    <div
      key={review.id}
      className="relative z-20 w-[320px] min-[500px]:w-[420px] md:w-[510px] lg:w-[510px] h-auto py-10 flex items-center justify-between rounded-3xl bg-gradient-to-br from-[#f9dcb157] to-[#ffc76d81] drop-shadow-2xl my-auto cursor-pointer"
      style={{ backdropFilter: "35px" }}
      transition:name={`modal-${review.id}`}
      transition:animate="slide"
    >
      <div className="mx-6 px-4">
        <div className="flex items-center">
          <span className="font-semibold tracking-tighter">
            {review.author.split(" ")[0]} &nbsp;
            {review.author.split(" ")[1]?.[0].toUpperCase()}.
          </span>
          <span className="ml-2 text-yellow-500">{"★".repeat(review.rating)}</span>
        </div>
        <p className="text-[#452B1F] mt-1.5 flex-grow">{review.text}</p>
        <button onClick={onClose} className="absolute top-4 right-4 bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold py-1.5 px-3 mb-8 rounded-xl">Close</button>
      </div>
    </div>
  </div>
);

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
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

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

  const handleModalOpen = (review: Review) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setSelectedReview(review);
      });
    } else {
      setSelectedReview(review);
    }
  };

  const handleModalClose = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setSelectedReview(null);
      });
    } else {
      setSelectedReview(null);
    }
  };
  
  if (loading) return <p className="my-auto px-5">Loading...</p>;
  if (error) return <p className="my-auto px-5">{error}</p>;

  return (
    <>
      {selectedReview && <Modal review={selectedReview} onClose={handleModalClose} />}
      <section className="space-y-4 lg:space-y-0 lg:space-x-6 lg:flex my-auto mb-16 drop-shadow-2xl">
        {reviews.map((review) => (
          <div
            key={review.id}
            onClick={() => handleModalOpen(review)}
            className="relative -z-10 w-[300px] min-[500px]:w-[348px] md:w-[445px] lg:w-[285px] xl:w-[320px] h-[150px] flex-grow flex items-center justify-between rounded-3xl bg-gradient-to-br from-[#f9dcb157] to-[#ffc76d81] drop-shadow-2xl my-auto cursor-pointer"
            transition:name={`review-card-${review.id}`}
          >
            <div className="absolute top-5 -left-2">
              <img
                src="src/assets/review-icon.svg"
                alt="Review author photo"
                className="w-[55px] h-auto rounded-2xl p-1.5 bg-gradient-to-tl from-[#7F0201] from-10% via-[#A52A2A] via-30% to-[#FFC66D] to-90%"
              />
            </div>
            <div className="ml-12 -mt-1 px-4">
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
    </>
  );
};

export default Reviews;
