import React from "react";
import "../css/MainBlog.min.css";
import { NavLink } from "react-router-dom";

export default function MainBlog() {
	return (
		<div className="card mb-3 border-light bord w-50">
			<div className="row g-0">
				<div className="col-md-4">
					<img src="" className="img-fluid rounded-start pt-3" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h4 className="card-title text-start text-primary pt-3">MR</h4>
						<h6 className="card-title text-start text-primary">Jhony Hock</h6>
						<p className="card-text text-start">
							The<span className="text-primary"> (Mowaeidy)</span> team
							represents among the heighst levels of Customer service i have
							experianced.
						</p>
						<NavLink to="/blogs">
							<button className="btn btn-primary" type="button">
								Explore More
							</button>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}
