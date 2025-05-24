import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CurrentUserContext } from "./components/CurrentUserContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Explore from "./pages/Explore";
import ProductDetails from "./pages/ProductDetails";
import UserDetails from "./pages/UserDetails";
import UserSettings from "./pages/UserSettings";
import UserCart from "./pages/UserCart";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ResetPassword from "./pages/ResetPassword";
import SearchResults from "./pages/SearchResults";

const App = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  setCurrentUser({
            "user_id": 2, 
            "user_name": "boop",
            "user_password": "qwerty",
            "user_email": "boop@boop.ca",
            "user_phone": "000-000-0000",
            "user_about_me": "get booped",
            "user_friends": [],
            "user_followers": ["blob"],
            "user_following": ["blobby"],
            "user_likes": [],
            "user_favorite_song": "",
            "user_banner_src":"https://i.imgur.com/x0HR8cj.png",
            "user_pfp_src": "https://i.imgur.com/f7obwfH.png",
            "user_books": [{"item_id": 1}, {"item_id": 1},{"item_id": 1}],
            "user_music":{
                "CDs": [{"item_id": 3}, {"item_id": 3}, {"item_id": 3}],
                "Vinyls": [{"item_id": 2}, {"item_id": 6}, {"item_id": 7 }]
            },
             "user_cart": [],
            "user_wishlist": []
        });

  return (
    <Router>
      <div id="wrapper">
        <NavBar />
        <Routes>
          <Route path="/testing250524/resetPassword" element={<ResetPassword />} />
            <Route path="/testing250524/" element={<Home />} />
            <Route path="/testing250524/home" element={<Home />} />
            <Route path="/testing250524/about" element={<About />} />
            <Route path="/testing250524/shop" element={<Shop />} />
            <Route path="/testing250524/explore" element={<Explore />} />
            <Route path="/testing250524/shop/product/:item_id" element={<ProductDetails />} />
            <Route path="/testing250524/profile/:username" element={<UserDetails currentUser={currentUser} />} />
            <Route path="/testing250524/settings" element={<UserSettings />} />
            <Route path="/testing250524/cart" element={<UserCart />} />
            <Route path="/testing250524/search" element={<SearchResults />} />
          <Route path="*" element={<Navigate to="/testing250524/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
