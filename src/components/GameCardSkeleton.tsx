const GameCardSkeleton = () => {
  return (
    // <div className=" bg-slate-800 shadow rounded-md p-2 max-w-md w-full mx-auto">
    //   <div className=" animate-pulse flex space-x-4">
    //     <div className="rounded-full bg-slate-700 h-42 w-10"></div>
    //     <div className="flex-1 space-y-6 py-1">
    //       {/* <div className="h-2 bg-slate-700 rounded"></div> */}
    //       <div className="space-y-3">
    //         <div className="grid grid-cols-3 gap-4">
    //           <div className="h-2 bg-slate-700 rounded col-span-2"></div>
    //           <div className="h-2 bg-slate-700 rounded col-span-1"></div>
    //         </div>
    //         <div className="h-2 bg-slate-700 rounded"></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-slate-800 shadow rounded-md p-2 max-w-md w-full h-80 mx-auto">
      <div className="animate-pulse  bg-slate-700 h-28"></div>
      <div className="animate-pulse h-2 bg-slate-700 rounded mt-4"></div>
      <div className="animate-pulse h-2 bg-slate-700 rounded mt-3"></div>
      <div className="animate-pulse h-2 bg-slate-700 rounded mt-3"></div>
      <div className="animate-pulse h-2 bg-slate-700 rounded mt-3"></div>
      <div className="animate-pulse h-2 bg-slate-700 rounded mt-3"></div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
