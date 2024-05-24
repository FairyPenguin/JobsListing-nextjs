import LocationPinSvgIcon from "../SvgIcons/LocationPinSvgIcon";
import styles from "./JobItem.module.css";
import JobItemDescription from "./JobItemComponents/JobDescription";

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
          <JobItemDescription jobDescription={job.description} />
          <h3 className={styles["job__item__salary"]}>{job.salary}</h3>
          <span className={styles["seprator__line"]}></span>
          <div className={styles["job__item__bottom__section"]}>
            <div className={styles["job__item__location"]}>
              {/* Location SVG ICON */}
              <LocationPinSvgIcon width={18} height={18} fill="#ffa94d" />
              {job.location}
            </div>
            <a href="job" className={styles["job__item_readmore"]}>
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
