import { Bookmark } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Job = ({job}) => {
  const navigate = useNavigate() ;
  // const jobId = "ashhaac" ;

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime) ;
    const currentTime = new Date() ;
    const timeDifference = currentTime-createdAt ;
    return Math.floor(timeDifference/(1000*24*60*60)) ;
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between h-full">
      {/* Top Row */}
      <div className="flex justify-between items-start mb-2">
        <p className="text-xs text-gray-500">{daysAgoFunction(job?.createdAt)===0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bookmark size={18} />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex items-start gap-4 mb-2">
        <Avatar className="w-14 h-14 mb-1 border border-gray-300">
          <AvatarImage
            src={job?.company?.logo}
            alt="company-logo"
          />
        </Avatar>
        <div>
          <h2 className="font-bold text-md">{job?.company?.name}</h2>
          <p className="text-xs text-gray-500">India</p>
        </div>
      </div>

      {/* Job Description */}
      <div className="flex-grow mb-3">
        <h3 className="font-bold text-md">{job?.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {job?.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-2 mb-3">
        <Badge variant="ghost" className="text-blue-700 font-bold">{job?.position} Position</Badge>
        <Badge variant="ghost" className="text-[#F83002] font-bold">{job?.jobType} Time</Badge>
        <Badge variant="ghost" className="text-[#6A38C2] font-bold">{job?.salary} LPA</Badge> 
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Button onClick={()=> navigate(`description/${job?._id}`)} className='bg-white text-black' variant='outline'>Details</Button>
        <Button variant="outline" className='bg-[#6A38C2] text-white'>Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
