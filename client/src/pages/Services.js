import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedServices, setExpandedServices] = useState({});
  const tabsRef = useRef(null);
  const underlineRef = useRef(null);

  const services = [
    {
      id: 'recording',
      title: 'CMT',
      shortDesc: 'Cut, make and trim.',
      longDesc: 'EITHER YOU CAN TRANSPORT THE FABRICS TO OUR FACILITY OR WE CAN DO IT FOR YOU. UPON RECEIVING THE TECH PACK, WE FIRST CREATE THE SAMPLE, SHIP IT BACK, EMAIL THE PRECISE PRICING AND START THE PRODUCTION PROCESS IF EVERYTHING SETTLED. WE CAN START THE PRODUCTION USING YOUR PATTERNS OR CREATE THE PATTERN CONSTRUCTION FOR YOU.',
      image: '/images/faktory_studios_stock_1.jpg'
    },
    {
      id: 'production',
      title: 'FPS',
      shortDesc: 'Full package solution.',
      longDesc: 'FPP INCLUDES EVERYTHING FROM THE CMT SELECTION, ALONG WITH THE FABRIC AND TRIM SOURCING, ADDITIONAL PATTERN MAKING AND DESIGN SERVICES.',
      image: '/images/faktory_studios_stock_2.jpg'
    },
    {
      id: 'mixing',
      title: 'Pattern making and grading',
      shortDesc: 'Production and design of custom patterns.',
      longDesc: 'AT OUR FACILITY IN SERBIA, WE ARE ABLE TO WORK FROM EITHER A PROTOTYPE OR AN ILLUSTRATION TO CRAFT HAND-DRAWN PRODUCTION- READY PATTERNS. ALL WE NEED IS THE DESIGNER’S IDEA & WE WILL TRANSLATE IT TO A PATTERN. TECH PACK AND SPEC SHEETS ARE REQUIRED TO START PRODUCTION WITH US. HOWEVER, IF THE BRAND DOES NOT HAVE ONE OUR TEAM WILL CREATE THE TECHNICAL DRAWING, TECH PACK AND SPEC SHEET AT AN ADDITIONAL FEE. WHEN REACHING THE FINAL STEP OF THE PATTERN DEVELOPMENT PROCEDURE, WE TRANSLATE THE APPROVED PATTERN IN YOUR DESIRED SIZE RANGE ACCORDING TO YOUR TARGET MARKET.',
      image: '/images//faktory_studios_stock_3.jpg'
    },
    {
      id: 'rental',
      title: 'Fabric and trim sourcing',
      shortDesc: 'Fabric and trim sourcing.',
      longDesc: 'UPON RECEIVING YOUR TECH-PACK OR CREATING ONE FOR YOU, WE WILL SUGGEST THE MOST APPROPRIATE FABRIC & TRIM CHOICES THAT COMPLEMENT YOUR DESIGN BEST. AFTER SETTLING UPON CHOICES, WE ORDER THE EXACT QUANTITY NEEDED AND START THE MANUFACTURING PROCESS AS SOON THE FABRICS & TRIMS ARRIVE. ALL FABRICS CAN BE IMPORTED TO THE FAKTORY WITH THE EUR1 PROOF. THE ONLY CHARGES APPLY WHEN WE HANDLE THE IMPORT OF THE FABRICS FOR BRANDS. WE ALSO SOURCE CARE AND BRAND LABELS, TOGETHER WITH HANG LABELS. OUR MAIN FABRIC SUPPLIERS ARE SOURCED FROM SERBIA, ITALY AND FRANCE. FAKTORY TISSUS IS THE OFFICIAL DISTRIBUTOR OF THE ITALIAN CAFISSI SPA THE FRENCH DEVEAUX SAS FABRIC MANUFACTURERS. AFTER THE DESIGN CONSULTANCY, OUR TEAM PROVIDES THE MOST SUITABLE FABRIC CHOICE FOR THE DESIGNS PRESENTED. AS THE OFFICIAL DISTRIBUTORS, THE PRODUCTIONS WE WORK WITH OFFER MANY CUSTOMIZATION SERVICES FOR OUR CLIENTS, CHOOSING THE EXISTING QUALITY AS A BASE AND ADAPTING THE PRINT TO THE BRAND’S DESIGN.',
      image: '/images/faktory_studios_stock_4.jpg'
    },
    {
      id: 'apparel-development',
      title: 'Apparel Development',
      shortDesc: 'Sample overview, quality control, ironing & packaging.',
      longDesc: 'SAMPLE OVERVIEW, QUALITY CONTROL, IRONING & PACKAGING AFTER WE CREATE THE SAMPLE, WE SEND IT BACK TO THE CLIENT TO TEST THE FIT, FABRICS MAKING SURE THE GARMENT FULLY MEET THE EXPECTED OUTCOME. THROUGHOUT THE PROCESS, OUR TEAM ARE ALSO AVAILABLE FOR SHORT VIRTUAL MEETINGS TO CHECK DETAILS AND FIT TO NOT LOSE ANY TIME ON BOTH SIDES. IMMEDIATELY AFTER THE PRODUCTION IS COMPLETED, OUR QUALITY CONTROL TEAM REVIEWS EVERY STITCH AND NEATLY STEAMS THE GARMENT, FOLDS IT AND WRAPS INTO POLY BAGS, WHICH ARE BEING PACKED INTO BOXES.',
      image: '/images/faktory_studios_apparel_development.jpg',
      details: 'After we create the sample, we send it back to the client to test the fit, fabrics making sure the garment fully meet the expected outcome. Throughout the process, our team are also available for short virtual meetings to check details and fit to not lose any time on both sides. Immediately after the production is completed, our quality control team reviews every stitch and neatly steams the garment, folds it and wraps into poly bags, which are being packed into boxes.'
    },
    {
      id: 'photography',
      title: 'Photography',
      shortDesc: 'Professional photoshoots for your collection.',
      longDesc: 'WE OFFER TO SHOOT THE ENTIRE COLLECTION IN WANTED STYLE TO PREPARE THE EASY TRANSITION TO THE SALES STAGE. BEFORE THE SHOOT, OUR MARKETING TEAM WOULD HAVE A BRIEF CONVERSATION WITH A DESIGNER ASKING FOR ALL NECESSARY COMPONENTS SO THEY CAN CREATE A MOOD BOARD AND SEND OUT FOR THE APPROVAL. IN COLLABORATION WITH ONE OF THE BEST MODELLING AGENCIES IN BELGRADE, WE CAST THE MOST APPROPRIATE MODELS AND ORGANIZE THE PHOTOSHOOT IN THE STUDIO. FOR MORE BUDGET-FRIENDLY OPTIONS, WE OFFER WITHIN TWO DIFFERENT FACES AND SHOOT THE COLLECTION IN THE STUDIO THAT IS WITHIN OUR HQ. EITHER TOP SERBIAN STYLISTS OR ISTITUTO MARANGONI ALUMNI CAN CREATE THE EDITORIAL SHOOT FOR THE CLIENT, WITH EITHER ALREADY PROVIDED MOOD BOARD AND DETAILED REQUESTS, OR STARTING FROM SCRATCH.',
      image: '/images/faktory_studios_photography.jpg',
      details: 'We offer to shoot the entire collection in wanted style to prepare the easy transition to the sales stage. Before the shoot, our marketing team would have a brief conversation with a designer asking for all necessary components so they can create a mood board and send out for the approval. In collaboration with one of the best modelling agencies in Belgrade, we cast the most appropriate models and organize the photoshoot in the studio. For more budget-friendly options, we offer within two different faces and shoot the collection in the studio that is within our HQ. Either top Serbian stylists or Istituto Marangoni alumni can create the editorial shoot for the client, with either already provided mood board and detailed requests, or starting from scratch.'
    },
    {
      id: 'shipping',
      title: 'Shipping',
      shortDesc: 'Worldwide shipping and customs handling.',
      longDesc: 'OUR LOGISTICS TEAM PREPARES ALL THE CUSTOMS PAPERWORK AND ORGANIZES TRANSPORTATION TO THE FINAL DESTINATION. OUR COMPANY IS REGISTERED AS AN OFFICIAL CLOTHING EXPORTATION COMPANY, WE TAKE CARE OF ALL THE SHIPMENT PROCESS FROM SERBIA, TO MAKE SURE ALL THE SHIPMENTS ARRIVE PERFECTLY WORLDWIDE FROM OUR SIDE. WITH OUR EXPERIENCED TEAM, WE MADE SURE TO HAVE ALL THE POSSIBLE INFORMATION ABOUT THE CUSTOM RELEASE PROCESS OF EVERY COUNTRY WE WORK WITH. WE HAVE UP-TO-DATE DOCUMENTATION OF ALL NEEDED DOCUMENTS AND REGULATIONS NEEDED FOR CUSTOMS RELEASE OPTIMIZATION.',
      image: '/images/faktory_studios_shipping.jpg',
      details: 'Our logistics team prepares all the customs paperwork and organizes transportation to the final destination. Our company is registered as an official clothing exportation company, we take care of all the shipment process from Serbia, to make sure all the shipments arrive perfectly worldwide from our side. With our experienced team, we made sure to have all the possible information about the custom release process of every country we work with. We have up-to-date documentation of all needed documents and regulations needed for customs release optimization.'
    }
  ];

  useEffect(() => {
    updateUnderline();
  }, [activeTab]);

  const updateUnderline = () => {
    const activeTabElement = tabsRef.current.children[activeTab];
    const { offsetLeft, offsetWidth } = activeTabElement;
    underlineRef.current.style.left = `${offsetLeft}px`;
    underlineRef.current.style.width = `${offsetWidth}px`;
  };

  const toggleExpand = (id) => {
    setExpandedServices(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="services-page">
      <section className="services-intro">
        <h1>Our Services</h1>
        <p>At Faktory Studios, we offer a comprehensive range of services to support your fashion and apparel production needs. From CMT to full package solutions, we're here to help bring your creative vision to life.</p>
      </section>

      <div className="services-tabs-container">
        <div className="services-tabs" ref={tabsRef}>
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
        <div className="tab-underline" ref={underlineRef}></div>
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
              <div>
                <h2>{service.title}</h2>
                <p className="short-desc">{service.shortDesc}</p>
                <p className={`long-desc ${expandedServices[service.id] ? 'expanded' : ''}`}>
                  {expandedServices[service.id] ? service.longDesc : `${service.longDesc.slice(0, 150)}...`}
                </p>
              </div>
              <div className="button-container">
                <button className="view-more-btn" onClick={() => toggleExpand(service.id)}>
                  {expandedServices[service.id] ? 'View less' : 'View more'}
                </button>
                <Link to="/contact" className="cta-button">Book Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;