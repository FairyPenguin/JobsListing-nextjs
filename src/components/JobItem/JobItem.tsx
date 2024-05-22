import LocationPinSvgIcon from "../SvgIcons/LocationPinSvgIcon";
import styles from "./JobItem.module.css";

type Job = {
  id: number;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  companyId: number;
  created_at: Date;
  updated_at: Date;
};

export default function JobItem({ job }: { job: Job }) {
  return (
    <>
      {/* <!-- Job Listing 1 --> */}
      <div className={styles["job__item"]}>
        <div className={styles["job__item__inner__wrapper"]}>
          <div className={styles["job__item__typeandtitle__wrapper"]}>
            <div className={styles["job__item__type"]}>{job.type}</div>
            <h3 className={styles["job__item__title"]}>{job.title}</h3>
          </div>
          <div className={styles["job__item__description"]}>
            {job.description}
          </div>
          <h3 className={styles["job__item__salary"]}>{job.salary}</h3>
          <span className={styles["seprator__line"]}></span>
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              {/* Location SVG ICON */}
              <LocationPinSvgIcon width={20} height={20} />
              {job.location}
            </div>
            <a
              href="job"
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
