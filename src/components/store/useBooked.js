import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext'; // Assuming you have an AuthContext
import axios from 'axios';
import useRequestResorce from './useRequestresource';
import toast from 'react-hot-toast';

const useBooking = ({ roomId }) => {
    const { isLogged } = useContext(AuthContext); // User authentication state
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {createBooking}=useRequestResorce()
    const userId = localStorage.getItem('userId')  

    const handleBookRoom = async (roomId) => {
        if (!isLogged && !!userId) {
            toast.error("Please sign in to book a room.");
            return;
        }

        setLoading(true);
        try {
            const response = await createBooking(roomId,userId)
            alert("Room booked successfully!");
        } catch (error) {
            console.error("Error booking room:", error);
            setError("Failed to book room. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleCancelBooking = async () => {
        if (!user) {
            alert("Please sign in to cancel a booking.");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('/api/cancel-booking', {
                userId: user.id,
                roomId: roomId,
            });
            alert("Booking canceled successfully!");
        } catch (error) {
            console.error("Error canceling booking:", error);
            setError("Failed to cancel booking. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return {
      handleBookRoom,
      handleCancelBooking
    }
};

export default useBooking;
