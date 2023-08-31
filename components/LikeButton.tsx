import React, { useEffect, useState } from 'react';

import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { toast } from "react-hot-toast";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";



interface LikeButtonProps {
    songId : string;
};

const LikeButton : React.FC<LikeButtonProps> = ({ songId }) => {
  
    const router = useRouter();
    const { supabaseClient } = useSessionContext();

    const authModal = useAuthModal();
    const { user } = useUser();

    const [IsLiked, setIsLiked] = useState(false);

    useEffect(() => {
      // check if user is loged or not to like song
      if( !user?.id ){
        return;
      }

      // fetch song from Liked table
      const Fetchdata = async () => {
        const {data, error } = await supabaseClient
                    .from('liked_songs')
                    .select("*")
                    .eq('user_id' , user.id)
                    .eq('song_id' , songId)
                    .single();

        //if no error and data is there
        if(!error && data ){
            setIsLiked(true)
        }
      }
      Fetchdata();
    }, [songId, supabaseClient, user?.id])

    const handleLike = async () =>{
        if( !user?.id){
            return authModal.onOpen();
        }

        if( IsLiked ){
            const { error } = await supabaseClient
                  .from('liked_songs')
                  .delete()
                  .eq("user_id" , user.id)
                  .eq("song_id" , songId);
            if( error ){
                toast.error(error.message)
            }else{
                setIsLiked(false)
            }
        }
        else{
            const { error } = await supabaseClient
                  .from("liked_songs")
                  .insert({
                    song_id: songId,
                    user_id: user.id
                  });
            if (error) {
              toast.error(error.message);
            } else {
              setIsLiked(true);
              toast.success("Liked!!")
            }        
        }
        // router.refresh()
    }
    
    const Icon = IsLiked ? AiFillHeart : AiOutlineHeart;

    return (
    <button className='hover:opacity-75 transition' onClick={handleLike}>
        <Icon color = { IsLiked ? '#22c55e' : 'white'} size={25} />
    </button>
  )
}

export default LikeButton