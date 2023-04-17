import React from 'react';
import '../styles/about.css';

import aboutImg from '../../components/images/about-us.jpg'

const chooseData = [
  {
    icon: 'ri-wifi-line',
    title: 'First working process',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde enim hic? Mollitia tempora perspiciatis hic similique debitis minima"
  },
  {
    icon: 'ri-team-line',
    title: 'Dedicated team',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde enim hic? Mollitia tempora perspiciatis hic similique debitis minima"
  },
  {
    icon: 'ri-customer-service-2-line',
    title: '24/7 Hours support',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde enim hic? Mollitia tempora perspiciatis hic similique debitis minima"
  },
]




const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtile tail"> Why choose us</h6>
            <h2> Spacialist in aviding on </h2>
            <h2 className="highlight"> financial challenges</h2>
            <p className="description about__content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              sapiente quae ipsum perferendis mollitia, ullam omnis eaque ab
              dolorum quidem quasi magnam laboriosam cum voluptatibus in
              inventore facere consequatur officiis?
            </p>
            <div className='choose__item-wrapper'>
              {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__img">
            <img src={aboutImg} alt='About' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;