### Optimize Build Times

Steps taken to optimise build times

- Analyzed webpack build process to identify potential bottlenecks with help of [`speed-measure-webpack-plugin`](https://www.npmjs.com/package/speed-measure-webpack-plugin)
  > No major bottlenecks identified with this
- Looked at webpack optimize config parameters, after disbaling minification for development builds, saw a decrease of nearly 100ms, down from ~220ms to ~120ms.
- Tried replacing ts-loader with esbuild-loader, this resulted in further ~10ms improvement.
- Finally, replaced webpack with [esbuild](https://esbuild.github.io/).
  > This increased the build speeds significantly, using `time` command, the build times decreased from 4.6s (user) to 2.9s (user), on an avg of 10 sequential builds.
  > ```bash
  > for i in {1..10}; do time npm run build; done
  > ```


### How would you identify a great SRE?

##### Quantitative mindset

An SRE should be able to quantify/measure various key metrics that contribute to a smoother end-user experience.
They should set clear expectations around the requirements, and then establish proper checks and validations to ensure
that the expectations are met.

##### Get their hands dirty

SREs should contribute about 30% of their working with actual code written by other teams in-order to identify and
formulate proper standards in the organisation. They should be constantly evolving the best-practices inside the org.

##### Build for teams

SREs should help other developers in ensuring that performant and reliable code is being pushed out with every release.
It could be via multiple ways like, PR reviews, SLO validations, help provide Observability best-practices, etc.

### How would you identify targets and measures for an organisation, so you can define uptime and availability SLOs?

Targets are usually defined on a per-user-path basis, there can be different availability/latency targets for a given path.

Few of the key indicators I see important are:

- **Apdex** - It measures user satisfaction, it is the ratio of satisfactory response times to unsatisfactory response times.
- **Availability** - It is the measure of successful events to total events. 
  > Ex: 3 nines (~99.95%) are ideal for an API that depends on 3-5 downstream APIs each with 99.99% uptime SLA.

Any service SLA should never be targeted for 100% uptime as it hinders experimentation and further evolution.
