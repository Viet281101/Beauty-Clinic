import React, { useState, useRef, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
	iconUrl: require("leaflet/dist/images/marker-icon.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapSection = styled.section`
	${tw`relative w-full h-[480px] overflow-hidden`}
	@media (max-width: 1440px) {
		${tw`h-[418px]`}
	}
	@media (max-width: 768px) {
		${tw`h-[300px]`}
	}
`;

const Map: React.FC = () => {
	const [isInteractive, setIsInteractive] = useState(false);
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const mapElement = mapRef.current;

		if (mapElement) {
			const handleMouseLeave = () => {
				setIsInteractive(false);
			};

			const handleClick = () => {
				setIsInteractive(true);
			};

			mapElement.addEventListener("mouseleave", handleMouseLeave);
			mapElement.addEventListener("click", handleClick);

			return () => {
				mapElement.removeEventListener("mouseleave", handleMouseLeave);
				mapElement.removeEventListener("click", handleClick);
			};
		}
	}, []);

	return (
		<MapSection ref={mapRef}>
			<MapContainer
				center={[48.8566, 2.3522]}
				zoom={13}
				style={{ width: "100%", height: "100%" }}
				scrollWheelZoom={isInteractive}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				<Marker position={[48.8566, 2.3522]}>
					<Popup>Your Location</Popup>
				</Marker>
			</MapContainer>
		</MapSection>
	);
};

export default Map;
