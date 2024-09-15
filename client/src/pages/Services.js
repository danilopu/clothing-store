// import React, { useState } from 'react';
// import '../styles/Services.css';

// const scrollToSection = (id) => {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }
// };

// function Services() {
//   const [expandedServices, setExpandedServices] = useState({});

//   const services = [
//     {
//       id: 'music-production',
//       title: 'CMT',
//       shortDesc: 'Cut, make and trim.',
//       longDesc: 'EITHER YOU CAN TRANSPORT THE FABRICS TO OUR FACILITY OR WE CAN DO IT FOR YOU. UPON RECEIVING THE TECH PACK, WE FIRST CREATE THE SAMPLE, SHIP IT BACK, EMAIL THE PRECISE PRICING AND START THE PRODUCTION PROCESS IF EVERYTHING SETTLED. WE CAN START THE PRODUCTION USING YOUR PATTERNS OR CREATE THE PATTERN CONSTRUCTION FOR YOU.',
//       image: '/images/faktory_studios_stock_1.jpg'
//     },
//     {
//       id: 'studio-rental',
//       title: 'FPS',
//       shortDesc: 'Full package solution.',
//       longDesc: 'FPP INCLUDES EVERYTHING FROM THE CMT SELECTION, ALONG WITH THE FABRIC AND TRIM SOURCING, ADDITIONAL PATTERN MAKING AND DESIGN SERVICES.',
//       image: '/images/faktory_studios_stock_2.jpg'
//     },
//     {
//       id: 'media-creation',
//       title: 'Pattern making and grading',
//       shortDesc: 'Production and design of custom patterns.',
//       longDesc: 'AT OUR FACILITY IN SERBIA, WE ARE ABLE TO WORK FROM EITHER A PROTOTYPE OR AN ILLUSTRATION TO CRAFT HAND-DRAWN PRODUCTION- READY PATTERNS. ALL WE NEED IS THE DESIGNER’S IDEA & WE WILL TRANSLATE IT TO A PATTERN. TECH PACK AND SPEC SHEETS ARE REQUIRED TO START PRODUCTION WITH US. HOWEVER, IF THE BRAND DOES NOT HAVE ONE OUR TEAM WILL CREATE THE TECHNICAL DRAWING, TECH PACK AND SPEC SHEET AT AN ADDITIONAL FEE. WHEN REACHING THE FINAL STEP OF THE PATTERN DEVELOPMENT PROCEDURE, WE TRANSLATE THE APPROVED PATTERN IN YOUR DESIRED SIZE RANGE ACCORDING TO YOUR TARGET MARKET.',
//       image: '/images//faktory_studios_stock_3.jpg'
//     },
//     {
//       id: 'equipment-rental',
//       title: 'Fabric and trim sourcing',
//       shortDesc: 'Fabric and trim sourcing.',
//       longDesc: 'UPON RECEIVING YOUR TECH-PACK OR CREATING ONE FOR YOU, WE WILL SUGGEST THE MOST APPROPRIATE FABRIC & TRIM CHOICES THAT COMPLEMENT YOUR DESIGN BEST. AFTER SETTLING UPON CHOICES, WE ORDER THE EXACT QUANTITY NEEDED AND START THE MANUFACTURING PROCESS AS SOON THE FABRICS & TRIMS ARRIVE. ALL FABRICS CAN BE IMPORTED TO THE FAKTORY WITH THE EUR1 PROOF. THE ONLY CHARGES APPLY WHEN WE HANDLE THE IMPORT OF THE FABRICS FOR BRANDS. WE ALSO SOURCE CARE AND BRAND LABELS, TOGETHER WITH HANG LABELS. OUR MAIN FABRIC SUPPLIERS ARE SOURCED FROM SERBIA, ITALY AND FRANCE. FAKTORY TISSUS IS THE OFFICIAL DISTRIBUTOR OF THE ITALIAN CAFISSI SPA THE FRENCH DEVEAUX SAS FABRIC MANUFACTURERS. AFTER THE DESIGN CONSULTANCY, OUR TEAM PROVIDES THE MOST SUITABLE FABRIC CHOICE FOR THE DESIGNS PRESENTED. AS THE OFFICIAL DISTRIBUTORS, THE PRODUCTIONS WE WORK WITH OFFER MANY CUSTOMIZATION SERVICES FOR OUR CLIENTS, CHOOSING THE EXISTING QUALITY AS A BASE AND ADAPTING THE PRINT TO THE BRAND’S DESIGN.',
//       image: '/images/faktory_studios_stock_4.jpg'
//     },
//     {
//       id: 'apparel-development',
//       title: 'Apparel Development',
//       shortDesc: 'Sample overview, quality control, ironing & packaging.',
//       longDesc: 'SAMPLE OVERVIEW, QUALITY CONTROL, IRONING & PACKAGING AFTER WE CREATE THE SAMPLE, WE SEND IT BACK TO THE CLIENT TO TEST THE FIT, FABRICS MAKING SURE THE GARMENT FULLY MEET THE EXPECTED OUTCOME. THROUGHOUT THE PROCESS, OUR TEAM ARE ALSO AVAILABLE FOR SHORT VIRTUAL MEETINGS TO CHECK DETAILS AND FIT TO NOT LOSE ANY TIME ON BOTH SIDES. IMMEDIATELY AFTER THE PRODUCTION IS COMPLETED, OUR QUALITY CONTROL TEAM REVIEWS EVERY STITCH AND NEATLY STEAMS THE GARMENT, FOLDS IT AND WRAPS INTO POLY BAGS, WHICH ARE BEING PACKED INTO BOXES.',
//       image: '/images/faktory_studios_apparel_development.jpg',
//       details: 'After we create the sample, we send it back to the client to test the fit, fabrics making sure the garment fully meet the expected outcome. Throughout the process, our team are also available for short virtual meetings to check details and fit to not lose any time on both sides. Immediately after the production is completed, our quality control team reviews every stitch and neatly steams the garment, folds it and wraps into poly bags, which are being packed into boxes.'
//     },
//     {
//       id: 'photography',
//       title: 'Photography',
//       shortDesc: 'Professional photoshoots for your collection.',
//       longDesc: 'WE OFFER TO SHOOT THE ENTIRE COLLECTION IN WANTED STYLE TO PREPARE THE EASY TRANSITION TO THE SALES STAGE. BEFORE THE SHOOT, OUR MARKETING TEAM WOULD HAVE A BRIEF CONVERSATION WITH A DESIGNER ASKING FOR ALL NECESSARY COMPONENTS SO THEY CAN CREATE A MOOD BOARD AND SEND OUT FOR THE APPROVAL. IN COLLABORATION WITH ONE OF THE BEST MODELLING AGENCIES IN BELGRADE, WE CAST THE MOST APPROPRIATE MODELS AND ORGANIZE THE PHOTOSHOOT IN THE STUDIO. FOR MORE BUDGET-FRIENDLY OPTIONS, WE OFFER WITHIN TWO DIFFERENT FACES AND SHOOT THE COLLECTION IN THE STUDIO THAT IS WITHIN OUR HQ. EITHER TOP SERBIAN STYLISTS OR ISTITUTO MARANGONI ALUMNI CAN CREATE THE EDITORIAL SHOOT FOR THE CLIENT, WITH EITHER ALREADY PROVIDED MOOD BOARD AND DETAILED REQUESTS, OR STARTING FROM SCRATCH.',
//       image: '/images/faktory_studios_photography.jpg',
//       details: 'We offer to shoot the entire collection in wanted style to prepare the easy transition to the sales stage. Before the shoot, our marketing team would have a brief conversation with a designer asking for all necessary components so they can create a mood board and send out for the approval. In collaboration with one of the best modelling agencies in Belgrade, we cast the most appropriate models and organize the photoshoot in the studio. For more budget-friendly options, we offer within two different faces and shoot the collection in the studio that is within our HQ. Either top Serbian stylists or Istituto Marangoni alumni can create the editorial shoot for the client, with either already provided mood board and detailed requests, or starting from scratch.'
//     },
//     {
//       id: 'shipping',
//       title: 'Shipping',
//       shortDesc: 'Worldwide shipping and customs handling.',
//       longDesc: 'OUR LOGISTICS TEAM PREPARES ALL THE CUSTOMS PAPERWORK AND ORGANIZES TRANSPORTATION TO THE FINAL DESTINATION. OUR COMPANY IS REGISTERED AS AN OFFICIAL CLOTHING EXPORTATION COMPANY, WE TAKE CARE OF ALL THE SHIPMENT PROCESS FROM SERBIA, TO MAKE SURE ALL THE SHIPMENTS ARRIVE PERFECTLY WORLDWIDE FROM OUR SIDE. WITH OUR EXPERIENCED TEAM, WE MADE SURE TO HAVE ALL THE POSSIBLE INFORMATION ABOUT THE CUSTOM RELEASE PROCESS OF EVERY COUNTRY WE WORK WITH. WE HAVE UP-TO-DATE DOCUMENTATION OF ALL NEEDED DOCUMENTS AND REGULATIONS NEEDED FOR CUSTOMS RELEASE OPTIMIZATION.',
//       image: '/images/faktory_studios_shipping.jpg',
//       details: 'Our logistics team prepares all the customs paperwork and organizes transportation to the final destination. Our company is registered as an official clothing exportation company, we take care of all the shipment process from Serbia, to make sure all the shipments arrive perfectly worldwide from our side. With our experienced team, we made sure to have all the possible information about the custom release process of every country we work with. We have up-to-date documentation of all needed documents and regulations needed for customs release optimization.'
//     }
//   ];

//   const toggleExpand = (id) => {
//     setExpandedServices(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   return (
//     <div className="services-page">
//       <h1>Our Services</h1>
//       <div className="services-grid">
//       {services.map((service) => (
//         <div key={service.id} className="service-item" onClick={() => scrollToSection(service.id)}>
//           <h2>{service.title}</h2>
//         </div>
//       ))}
//     </div>
//       <div className="services-details">
//         {services.map((service, index) => (
//           <section id={service.id} key={service.id} className="service-detail">
//             <div className={`service-content ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
//               <div className="service-image">
//                 <img src={service.image} alt={service.title} />
//               </div>
//               <div className="service-text">
//                 <h2>{service.title}</h2>
//                 <p className={expandedServices[service.id] ? 'expanded' : 'collapsed'}>
//                   {service.longDesc}
//                 </p>
//                 <button onClick={() => toggleExpand(service.id)}>
//                   {expandedServices[service.id] ? 'Less' : 'More'}
//                 </button>
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Services;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'recording',
      title: 'Recording Services',
      shortDesc: 'State-of-the-art recording facilities for all your audio needs.',
      longDesc: 'Our recording services offer top-notch equipment and experienced engineers to capture your sound perfectly. Whether youre recording a full band, a solo artist, or voice-over work, we have the tools and expertise to deliver exceptional results.',
      image: '/images/recording-studio.jpg'
    },
    {
      id: 'production',
      title: 'Music Production',
      shortDesc: 'Full-service music production to bring your vision to life.',
      longDesc: 'Our music production services cover everything from pre-production planning to final mastering. Our team of experienced producers will work closely with you to develop your sound, arrange your music, and create a polished final product.',
      image: '/images/music-production.jpg'
    },
    {
      id: 'mixing',
      title: 'Mixing & Mastering',
      shortDesc: 'Professional mixing and mastering to perfect your sound.',
      longDesc: 'Our mixing and mastering services will give your tracks the professional polish they need. Using top-of-the-line equipment and software, our engineers will balance your mix, enhance the sound, and ensure your music translates well across all playback systems.',
      image: '/images/mixing-mastering.jpg'
    },
    {
      id: 'rental',
      title: 'Equipment Rental',
      shortDesc: 'High-quality audio equipment available for rent.',
      longDesc: 'Need specific gear for your project? Our equipment rental service offers a wide range of professional audio equipment, from microphones and preamps to instruments and amplifiers. We ensure all our rental equipment is well-maintained and ready for your production needs.',
      image: '/images/equipment-rental.jpg'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-intro">
        <h1>Our Services</h1>
        <p>At Faktory Studios, we offer a comprehensive range of services to support your music and audio production needs. From recording and production to mixing, mastering, and equipment rental, we're here to help bring your creative vision to life.</p>
      </section>

      <div className="services-tabs">
        {services.map((service, index) => (
          <button
            key={service.id}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {service.title}
          </button>
        ))}
      </div>

      <div className="services-content">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-item ${activeTab === index ? 'active' : ''}`}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-details">
              <h2>{service.title}</h2>
              <p>{service.shortDesc}</p>
              <p>{service.longDesc}</p>
              <Link to="/contact" className="cta-button">Book Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;