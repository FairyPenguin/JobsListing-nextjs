import getJobs from "../../../utilities/getJobs";
import JobItem from "../JobItem/JobItem";
import styles from "./JobsList.module.css";

export default async function JobsList() {
  const jobs = await getJobs();

  const slicedJobs = jobs?.slice(0, 3);

  return (
    // <!-- Browse Jobs -->
    <>
      <section className={styles["jobs__list"]}>
        <div className={styles["jobs__container"]}>
          <h2 className={styles["jobs__list__heading"]}>Browse Jobs</h2>
          <div className={styles["jobs__grid"]}>
            {
              /* JOOOOOOOOOOOOOBS */
              slicedJobs !== undefined ? (
                slicedJobs.map((job, index) => {
                  return <JobItem key={index} job={job} />;
                })
              ) : (
                <p>Sorry, no jobs available</p>
              )
            }
          </div>
        </div>
      </section>
    
    </>
  );
}
