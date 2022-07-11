import {useEffect, useState} from 'react';
import {setValuta} from "./store/slices/valutaSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function OnValuta(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);

    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);

    useEffect(() => {






        onAuthStateChanged(auth, (valuta) => {
            if (user) {
                const starCountRef = ref(db, "users/" + user.uid);
                onValue(starCountRef, (snapshot) => {
                    if (snapshot.exists()) {
                        var data = snapshot.val();

                        setFirstname(data.firstName);
                        setLastname(data.lastName);

                        dispatch(setUser({
                            email: user.email,
                            firstname: data.firstName,
                            lastname: data.lastName,
                            id: user.uid,
                            token: user.accessToken,
                        }));

                    }else{
                        dispatch(setValuta({
                            kursUSD: data.kursUSD,
                            firstname: '',
                            lastname: '',
                            id: user.uid,
                            token: user.accessToken,
                        }));
                    }
                });
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
                navigate("/login");
            }
        });
        // console.log(currentUser);
    }, [currentLoader, dispatch, navigate]);


    return {
        currentLoader,
        firstname,
        lastname,
    };
}

export default OnValuta;




