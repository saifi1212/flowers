import Button from "../common/Button";

const DataMaping = ({ data = [] }) => {
    return (
      <div className="flex flex-col gap-[8px]">
        {data.map((item, index) => (
          <Button
            key={index + "data"}
            varient={"normal"}
            text={item.title}
            href={item.link}
          />
        ))}
      </div>
    );
  };
  export default DataMaping