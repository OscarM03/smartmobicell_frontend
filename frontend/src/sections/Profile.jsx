import { useEffect, useState } from 'react';
import { ProfileImage } from "../utils";
import api from '../api';

const Profile = () => {
    const [profile, setProfile] = useState();
    // const [orders, setOrders] = useState([]);

    useEffect(() => {
      const fetchProfile = async () => {
          try {
              const response = await api.get('api/userprofile/');
              setProfile(response.data);
          } catch (error) {
              console.error('Error fetching profile:', error);
          }
      };

      fetchProfile();
  }, []);

    // // Example orders fetching (you may adjust based on your actual API)
    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         try {
    //             const response = await fetch('/api/orders/', {
    //                 headers: {
    //                     'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    //                 }
    //             });
    //             const data = await response.json();
    //             setOrders(data);
    //         } catch (error) {
    //             console.error('Error fetching orders:', error);
    //         }
    //     };

    //     fetchOrders();
    // }, []);

    if (!profile) {
        return <p>Loading...</p>;
    }

    return (
        <section>
            <div className="mx-40 mt-10 flex flex-col justify-center items-center">
                <div className="flex gap-10 items-center max-lg:flex-col">
                    <div>
                        <img src={`http://localhost:8000${profile.profile_image}` || ProfileImage} 
                              alt="profile" 
                              width={200}
                              className="rounded-[9999px] border"
                        />
                    </div>
                    <div className="flex gap-20 border-2 p-10 rounded-md border-thick-orange
                    font-medium text-lg text-slate-gray relative max-custom-950:flex-col">
                        <div className="max-custom-950:mt-10">
                            <h1 className="font-bold text-black pb-2">PERSONAL INFORMATION</h1>
                            <p className="pb-1"><span className="text-thick-orange">Name:</span> {profile.firstname} {profile.lastname}</p>
                            <p className="pb-1"><span className="text-thick-orange">Email:</span> {profile.user.email}</p>
                            <p><span className="text-thick-orange">Phone Number:</span> {profile.phone_number}</p>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-black pb-2">ADDRESS</h1>
                            <p><span className="text-thick-orange">Address:</span> {profile.address}</p>
                        </div>
                        <a href="/profile/update">
                            <button className="absolute top-0 right-0 bg-display-bg p-2
                            font-medium text-black border">
                                Update Profile
                            </button>
                        </a>
                    </div>
                </div>
                {/* <div className="min-w-full">
                    <h1 className="text-2xl font-semibold text-thick-orange py-10">My Orders</h1>
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="py-3 px-4 text-left border-b border-gray-200">Name</th>
                                <th className="py-3 px-4 text-left border-b border-gray-200">Price</th>
                                <th className="py-3 px-4 text-left border-b border-gray-200">Delivery Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td className="py-3 px-4 border-b border-gray-200">{order.name}</td>
                                    <td className="py-3 px-4 border-b border-gray-200">{order.price}</td>
                                    <td className="py-3 px-4 border-b border-gray-200">{order.delivery_status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> */}
            </div>
        </section>
    );
};

export default Profile;
