import './aboutUs.css'
const AboutUs = () => {
  return (
    <main id='princi'>
    <div id='first'>
        <div className='text'>
          <h1 className='h1about'>ABOUT US</h1>
          <p id='p1'>
          Hello! Welcome to EATWELL, your ally in the quest for healthy and convenient dining! At EATWELL, we are passionately dedicated to addressing the growing need for
          nutritious food options amidst busy schedules and hectic lifestyles. Our mission is simple yet powerful: to provide people with the choice to eat well without compromising
          their precious time. We are committed to being the solution for those who strive to maintain a balanced diet but struggle to find time to cook in the midst of modern life.
          </p>
        </div>
          <img src="/img/team.jpg" alt="Description of your image" />


    </div>

    <div id='second'>
    <img src="/img/fruta.jpg" alt="Description of your image" />
        <div className='text'>
          <h1 className='h1about'>OUR DREAM</h1>
          <p id='p2'>
          At the core of our values, we emphasize the importance of health, diversity, and convenience.
          We believe that everyone has the right to access healthy and delicious meals that suit their dietary needs and preferences.
          At EATWELL, we advocate for inclusivity by offering vegetarian and vegan options and taking into account food allergies to ensure that everyone
          finds dishes that fit their specific requirements. We value transparency and trust, providing our customers with detailed information about the ingredients
          and nutritional values of each dish. At EATWELL, we are committed to making a positive impact on peoples daily lives by making it easier for them to adopt
          healthier eating habits, all at an affordable price. Join us on this delightful journey towards a healthier and more satisfying life!
          </p>
        </div>
       

    </div>
    </main>
  )
}

export default AboutUs