import React from "react";

export const Card = (props) => {
  const { children, className } = props;

  return (
    <div className={`bg-white rounded-md shadow-md p-5 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = (props) => {
  const { children, className } = props;
  return <div className={`font-poppins ${className}`}>{children}</div>;
};

export const CardBody = (props) => {
  const { children } = props;
  return <div className="font-poppins mt-8">{children}</div>;
};

export const CardSection = (props) => {
  const { icon, amount, title, percentage, url} = props;
  return (
    <Card className="w-full"> 
      <CardHeader className="flex">
        <div className="w-3/4">
          <h3 className="text-xl font-medium">{amount}</h3>
          <p className="w-full">{title}</p>
        </div>
        <div className="w-1/2">
          <div className="flex justify-end">
            <div className="outline rounded-full w-8 h-8 text-center py-1">
              {icon}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex justify-between">
          <a href={url} className="text-xs">View Detail</a>
          <p>{percentage}</p>
        </div>
      </CardBody>
    </Card>
  );
};
