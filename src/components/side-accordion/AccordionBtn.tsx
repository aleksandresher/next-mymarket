interface AccordionButtonProps {
  content: string;
  option: string;
  selectedOption: string | null;
  onClick: (option: string) => void;
}

export default function AccordionButton({
  content,
  option,
  selectedOption,
  onClick,
}: AccordionButtonProps) {
  return (
    <button
      className={`w-fit border-2 p-2 rounded-[20px] ${
        selectedOption === option
          ? "bg-[#FEC901] border-[#caa148] bg-opacity-10"
          : "border-[#eeede6]"
      }`}
      onClick={() => onClick(option)}
    >
      {content}
    </button>
  );
}
