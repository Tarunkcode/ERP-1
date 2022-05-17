import React from "react";
import DatamapsIndia from "react-datamaps-india";

const MapChart = () => {
    return (
        <div>
            <DatamapsIndia
                regionData={{
                    Maharashtra: {
                        value: 10
                    },
                    Rajasthan: {
                        value: 1000
                    },
                    Gujarat: {
                        value: 800
                    },
                    Karnataka: {
                        value: 700
                    },
                    TamilNadu: {
                        value: 190
                    },
                    Kerala: {
                        value: 890
                    }
                }}
                hoverComponent={({ value }: any) => {
                    return (
                        <div>
                            <div>{value.value} tenders</div>
                        </div>
                    );
                }}
                mapLayout={{
                    title: "Statewise",
                    legendTitle: "Number of Tenders",
                    startColor: "#FFDAB9",
                    endColor: "#FF6347",
                    hoverTitle: "Count",
                    noDataColor: "#f5f5f5",
                    borderColor: "#8D8D8D",
                    hoverBorderColor: "#8D8D8D",
                    hoverColor: "green"

                }}
            />
        </div>
    );
};

export default MapChart;
