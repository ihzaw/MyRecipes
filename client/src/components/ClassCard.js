const ClassCard = () => {
  return (
    <div class="card card-side card-bordered border-primary shadow col-span-1">
      <figure>
        <img src="https://picsum.photos/id/1005/400/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          Horizontal
          <div class="badge mx-2">NEW</div>
        </h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div class="card-actions">
          <button class="btn btn-primary">Get Started</button>
          <button class="btn btn-ghost">More info</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
