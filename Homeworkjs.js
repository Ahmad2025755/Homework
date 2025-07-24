let div = document.createElement(`div`);
div.id = "paragraph"
div.className = "alert";

div.innerHTML = "<p> The solar system is a collection of celestial objects orbiting a star, the Sun, located in the Milky Way galaxy. It includes eight planets, numerous moons, dwarf planets, asteroids, comets, and other smaller objects. The Sun, a star, dominates the system, accounting for over 99.8% of its mass.  </p>";

document.body.append(div);

let heading = document.getElementById("Heading");
heading.innerHTML = '&#128512';