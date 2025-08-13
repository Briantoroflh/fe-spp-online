import React from "react";

export const Card = (props) => {
  const { children, className } = props;

  return (
    <div className={`bg-white min-w-sm rounded-md shadow-lg p-5 ${className}`}>
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
  return <div className="font-poppins mt-12">{children}</div>;
};

export const CardSection = (props) => {
  const { icon, amount, title, total, percentage } = props;
  return (
    <Card className="w-100">
      <CardHeader className="flex">
        <div className="w-1/2">
          <h3 className="text-xl font-medium">{amount}</h3>
          <p className="">{title}</p>
        </div>
        <div className="w-1/2">
          <div className="ms-38">
            <div className="outline rounded-full w-8 h-8 text-center py-1">
              {icon}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex justify-between">
          <p>{total}/600</p>
          <p>{percentage}</p>
        </div>
      </CardBody>
    </Card>
  );
};
