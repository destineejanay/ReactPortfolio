import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';


export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: [
                { title: "United States Navy", category: "Military", slug: "us-navy" },
                { title: "InterWorks", category: "Technology", slug: "interworks" },
                { title: "Total Wine & More", category: "Service", slug: "total-wine" },
                { title: "Panera Bread", category: "Food Service", slug: "panera" },,
                { title: "McAlister's Deli", category: "Food Service", slug: "mcalisters" },
            ]
        };
        this.handleFilter = this.handleFilter.bind(this);
        // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }
    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem key={item.title} title={item.title} url={"google.com"} slug={item.slug} />;
        });
    }

    // handlePageTitleUpdate() {
    //     this.setState({
    //         pageTitle: "Something Else"
    //     })
    // }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter("Military")}>
                    Military
                </button>
                <button onClick={() => this.handleFilter("Technology")}>
                    Technology
                </button>
                <button onClick={() => this.handleFilter("Service")}>
                    Service
                </button>
                <button onClick={() => this.handleFilter("Food Service")}>
                    Food Service
                </button>

                {this.portfolioItems()}

            </div>
        );
    }
}

/* <hr />  in render statement */

/* <button onClick={this.handlePageTitleUpdate}>Change Title</button> in render statement */