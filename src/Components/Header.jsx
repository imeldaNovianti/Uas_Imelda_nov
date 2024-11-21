import { useState } from "react";
// import { Link } from "react-router-dom";
import { Home, Info, ShoppingBag, User, Search, ArrowUp, ArrowDown } from "lucide-react";

export default function Header({ onSearch, onSort }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("");

    // Fungsi untuk menangani perubahan pada input pencarian
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    // Fungsi untuk menangani perubahan pada opsi pengurutan
    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortOption(value);
        onSort(value);
    };

    return (
        <header className="header">
            <Link to="/" className="logo-link">
                <img 
                    src="/Black_and_Brown_Illustrative_Florist_Logo-removebg-preview.png" 
                    alt="Logo" 
                    className="logo-image"
                />
            </Link>
            <nav className="navigasi">
                <ul className="container-link">
                    <li className="header-link">
                        <Link to="/">
                            <Home size={20} className="icon" /> Home
                        </Link>
                    </li>
                    <li className="header-link">
                        <Link to="/about">
                            <Info size={20} className="icon" /> About
                        </Link>
                    </li>
                    <li className="header-link">
                        <Link to="/Product">
                            <ShoppingBag size={20} className="icon" /> Products
                        </Link>
                    </li>
                    <li className="header-link">
                        <Link to="/Profile">
                            <User size={20} className="icon" /> Log in
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Search Input */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="type to search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <Search size={20} className="search-icon" />
            </div>

            {/* Sort Options */}
            <div className="sort-container">
                <select value={sortOption} onChange={handleSortChange} className="sort-select">
                    <option value="">Sort by</option>
                    <option value="nameAsc">Name (A - Z) <ArrowUp size={14} /></option>
                    <option value="nameDesc">Name (Z - A) <ArrowDown size={14} /></option>
                    <option value="priceAsc">Price (Low to High) <ArrowUp size={14} /></option>
                    <option value="priceDesc">Price (High to Low) <ArrowDown size={14} /></option>
                    <option value="idAsc">ID (Ascending) <ArrowUp size={14} /></option>
                    <option value="idDesc">ID (Descending) <ArrowDown size={14} /></option>
                </select>
            </div>
        </header>
    );
}
