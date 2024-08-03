import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "can I use javascript ?",
      content:
        "you can use React on whatever you want and you shoule share the list of features that you study every day,I think that is a good way to understand",
    },
    {
      id: 2,
      label: "can I use javascript ?",
      content:
        "you can use React on whatever you want and you shoule share the list of features that you study every day,I think that is a good way to understand",
    },
    {
      id: 3,
      label: "can I use javascript ?",
      content:
        "you can use React on whatever you want and you shoule share the list of features that you study every day,I think that is a good way to understand",
    },
  ];
  return <Accordion items={items} />;
}
export default AccordionPage;
