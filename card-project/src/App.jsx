import React from 'react'
import Card from "./components/Card.jsx";
import User from './components/User.jsx';

const App = () => {
  const jobOpenings = [
    {
      id: 1,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6U4pRN-hmnCKRp5bBpsxjHfbbutWDEgFRUo0YrTP2ag&s=10",
      company: "Google",
      datePosted: "2 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      payment: "$65/hour",
      location: "Bangalore, India",
    },
    {
      id: 2,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-DN8JuBVqnVzi9ib4zpDiRwE9ab9KziRGVb2OW2lIQ&s=10",
      company: "Microsoft",
      datePosted: "5 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payment: "$72/hour",
      location: "Hyderabad, India",
    },
    {
      id: 3,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPjeZ-FjJ-FHOMlVO9c1ZtEPo8ypuNnRN1uCMugVyyA&s=10",
      company: "Amazon",
      datePosted: "1 week ago",
      post: "Software Development Engineer I",
      tag1: "Full Time",
      tag2: "Junior Level",
      payment: "$55/hour",
      location: "Seattle, USA",
    },
    {
      id: 4,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtr4EZTsUK5gwlrphlorrtdMOF8BvEYyRzVpj42kM04A&s=10",
      company: "Meta",
      datePosted: "3 weeks ago",
      post: "React Developer",
      tag1: "Remote",
      tag2: "Mid Level",
      payment: "$68/hour",
      location: "Menlo Park, USA",
    },
    {
      id: 5,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhSOhVxQMORW1hbzj3TeuvPiZNfgzz9erq0eyu1_zjw&s=10",
      company: "Apple",
      datePosted: "6 days ago",
      post: "iOS Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payment: "$80/hour",
      location: "Cupertino, USA",
    },
    {
      id: 6,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfETA0_EL_5WtLo_cI_-pnst18VM_Y0N81GLPcIFvmD7wUwATypNchRe3j&s=10",
      company: "Netflix",
      datePosted: "2 weeks ago",
      post: "Cloud Platform Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payment: "$90/hour",
      location: "Los Gatos, USA",
    },
    {
      id: 7,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEUPUSGm6MtkWIp2orCYHJpVLnjI-skStBKl4j7fImA&s=10",
      company: "Adobe",
      datePosted: "4 days ago",
      post: "UI/UX Engineer",
      tag1: "Hybrid",
      tag2: "Mid Level",
      payment: "$60/hour",
      location: "Noida, India",
    },
    {
      id: 8,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSodNTPQrBw6frG0BPXUrOee81xMdSiz4NN2PnUrEsjcg&s=10",
      company: "NVIDIA",
      datePosted: "10 days ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payment: "$95/hour",
      location: "Santa Clara, USA",
    },
    {
      id: 9,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTkTnk5ex-2u1O9m36yWw6qSsM2ihYfhhg83ofCsQ_tA&s=10",
      company: "OpenAI",
      datePosted: "1 day ago",
      post: "Full Stack Engineer",
      tag1: "Remote",
      tag2: "Mid Level",
      payment: "$100/hour",
      location: "San Francisco, USA",
    },
    {
      id: 10,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvUKjFWDizIcm5drqniSODQ5YgztVV0sfUKv6H9tgjyA&s=10",
      company: "Uber",
      datePosted: "5 weeks ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payment: "$78/hour",
      location: "Bangalore, India",
    },
  ];

  // export default jobOpenings;
  console.log(jobOpenings);

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem) {
        return <div>
          <Card company={elem.company} post={elem.post} payment={elem.payment} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} location={elem.location} brandLogo={elem.brandLogo} />
        </div>
      })}

    </div>
  )
}

export default App