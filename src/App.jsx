import "./App.css";

import ProfileCard from "./components/ProfileCard";
import StarRating from "./components/StarRating";
import PriceTag from "./components/PriceTag";
import AlertBox from "./components/AlertBox";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import TeamPage from "./components/TeamPage";

// Team members displayed on the team page
const team = [
  {
    name: "Amina Wanjiku",
    role: "Lead Developer",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "Full-stack engineer with 5 years of experience."
  },
  {
    name: "Brian Ochieng",
    role: "UI Designer",
    avatar: "https://i.pravatar.cc/150?img=2",
    bio: "Passionate about clean, accessible design."
  },
  {
    name: "Kevin Mwangi",
    role: "Backend Developer",
    avatar: "https://i.pravatar.cc/150?img=3",
    bio: "Builds reliable APIs and scalable backend systems."
  },
  {
    name: "Caleb Omwami",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=4",
    bio: "Keeps projects organized and focused on user needs."
  },
  {
    name: "Natalie Cherop",
    role: "DevOps Engineer",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Focused on deployment, automation, and infrastructure."
  },
  {
    name: "Paul Were",
    role: "QA Engineer",
    avatar: "https://i.pravatar.cc/150?img=6",
    bio: "Makes sure our applications are reliable and user-friendly."
  }
];

function App() {
  return (
    <>
      <NavBar brand="My App" 
       links={[{ label: "Home", href: "#" },
         { label: "About", href: "#about" },
         { label: "Contact", href: "#contact" }
        ]} 
      />

      <main>
        <h1>React Components</h1>

        <section>
          <h2>Profile Card</h2>
          <ProfileCard 
            name="Amina"
            title="Frontend Developer" 
            avatar="https://i.pravatar.cc/150?img=47" //placeholder image
            location="Nairobi, Kenya" 
          />
        </section>

        <section>
          <h2>Star Rating</h2>
          <StarRating rating={4} maxStars={5} />
        </section>

        <section>
          <h2>Price Tag</h2>
          <PriceTag
            price={2000}
            currency="KES"
            discount={25}
          />
        </section>

        <section>
          <h2>Alert Box</h2>
          <AlertBox
            type="success"
            message="Payment successful!"
          >
            <p>Your order has been confirmed.</p>
          </AlertBox>          
        </section>

        <section>
          <h2>Products</h2>
          {/* Product cards displayed in the products section */}
          <div className="product-grid">
            <ProductCard
              image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
              name="Wireless Headphones"
              price={2500}
              rating={4}
              inStock={true}
            />

            <ProductCard
              image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              name="Smart Watch"
              price={5500}
              rating={5}
              inStock={true}
            />

            <ProductCard
              image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              name="Shoes"
              price={3500}
              rating={4}
              inStock={false}
            />                        
            
            <ProductCard
              image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              name="Coffee Maker"
              price={8500}
              rating={4}
              inStock={false}
            />
          </div>
        </section>

        <section>
          <TeamPage
            members={team}
          />
        </section>
      </main>
    </>
  );
}

export default App;