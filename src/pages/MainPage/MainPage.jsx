import RollingPaperCard from "../ListPage/components/RollingPaperCard/RollingPaperCard";

const MainPage = () => {
  return (
    <div className="flex flex-col gap-3 m-3">
      <div className="flex gap-3">
        <RollingPaperCard />
        <RollingPaperCard name="KIM" messageCount={4} backgroundColor="green" />
        <RollingPaperCard
          name="MILK"
          messageCount={30}
          backgroundColor="blue"
        />
        <RollingPaperCard
          name="sfjkldjfslfjsdfklsjflkfjklfjds"
          messageCount={400}
          backgroundColor="purple"
        />
      </div>
      <div className="flex gap-3">
        <RollingPaperCard messageCount={99999999999} />
        <RollingPaperCard
          name="KIM"
          profiles={[]}
          messageCount={0}
          backgroundColor="green"
        />
        <RollingPaperCard
          name="MILK"
          messageCount={30000000000000000000}
          backgroundColor="blue"
        />
        <RollingPaperCard
          name="sfjkldjfslfjsdfklsjflkfjklfjds"
          messageCount={400}
          backgroundColor="purple"
        />
      </div>
    </div>
  );
};

export default MainPage;
