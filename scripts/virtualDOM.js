/* eslint-disable no-unused-vars */
const TestimonialVirtualDom = (data) => (
  {
    type: 'div',
    class: 'testimonial-card',
    child: [
      {
        type: 'div',
        class: 'testimonial-card-img',
        style: `background-image : url(${data.image});`,
      },
      {
        type: 'div',
        class: 'testimonial-card-content',
        child: [
          {
            type: 'h2',
            class: 'testimonial-name',
            innerText: data.name,
          },
          {
            type: 'p',
            class: 'testimonial-task',
            innerText: data.task,
          },
          {
            type: 'p',
            class: 'testimonial-comment',
            innerText: data.comment,
          },
        ],
      },
    ],
  }
);